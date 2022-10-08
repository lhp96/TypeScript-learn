const url: string = "https://api.thecatapi.com/v1/images/search";
const button: HTMLButtonElement | null = document.querySelector("button");
const tableBody: HTMLTableElement | null =
  document.querySelector("#table-body");

interface CatType {
  id: string;
  url: string;
  height: number;
  width: number;
  test?: boolean;
}

class Cat implements CatType {
  id: string;
  url: string;
  height: number;
  width: number;
  constructor(id: string, url: string, height: number, width: number) {
    this.id = id;
    this.url = url;
    this.height = height;
    this.width = width;
  }
}

class WebDisplay {
  public static addData(data: CatType): void {
    const cat: Cat = new Cat(data.id, data.url, data.height, data.width);
    const el: HTMLTableRowElement | null = document.createElement("tr");
    el.innerHTML = `
        <td>id:${cat.id}</td>
          <td><img src="${cat.url}" alt="" /></td>
          <td>高度${cat.height.toString()}</td>
          <td>宽度${cat.width.toString()}</td>
          <td>地址${cat.url}</td>
        <td><a href="#">X</a></td>`;
    tableBody?.append(el);
  }
  public static deleteData(deleteButton: HTMLAnchorElement): void {
    const td = deleteButton.parentElement as HTMLTableCellElement;
    const tr = td.parentElement as HTMLTableRowElement;
    tr.remove();
  }
}

async function getJSON<T>(url: string): Promise<T> {
  const response: Response = await fetch(url);
  const json: Promise<T> = await response.json();
  return json;
}

console.log(getJSON(url));

async function getData(): Promise<void> {
  try {
    const json: CatType[] = await getJSON<CatType[]>(url);
    const data: CatType = json[0];
    WebDisplay.addData(data);
  } catch (err: Error | unknown) {
    let msg: string;
    if (err instanceof Error) {
      msg = err.message;
    } else {
      msg = String(err);
    }
    console.log(msg);
  }
}

button?.addEventListener<"click">("click", getData);

tableBody?.addEventListener<"click">("click", (ev: MouseEvent) => {
  WebDisplay.deleteData(<HTMLAnchorElement>ev.target);
});
