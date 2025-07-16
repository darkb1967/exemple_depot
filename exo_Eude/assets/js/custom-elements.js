const fetchHeader = async () => {
  try {
    const res = await fetch("./assets/header.txt");
    const template = await res.text();
    const parse = new DOMParser();
    const html = parse.parseFromString(template, "text/html");
    const header = html.querySelector("body header");

    document.body.prepend(header);
  } catch (err) {
    console.log(err);
  }
};

const fetchFooter = async () => {
  try {
    const res = await fetch("./assets/footer.txt");
    const template = await res.text();
    const parse = new DOMParser();
    const html = parse.parseFromString(template, "text/html");
    const footer = html.querySelector("body footer");

    document.body.append(footer);
  } catch (err) {
    console.log(err);
  }
};

fetchHeader().then(fetchFooter);