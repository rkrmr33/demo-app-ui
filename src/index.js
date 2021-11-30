let platformUrl;

async function apiserverClick() {
  try {
    const startT = new Date().getTime();
    const res = await fetch(`${platformUrl}`);
    const endT = new Date().getTime();
    const content = `${await res.text()}\n\ntook: ${endT - startT}ms`;
    document.getElementById('apiserver-data').textContent = content;
  } catch (error) {
    document.getElementById('apiserver-data').textContent = error;
  }
}

async function svc1Click() {
  try {
    const startT = new Date().getTime();
    const res = await fetch(`${platformUrl}/svc1`);
    const endT = new Date().getTime();
    const content = `${await res.text()}\n\ntook: ${endT - startT}ms`;
    document.getElementById('svc1-data').textContent = content;
  } catch (error) {
    document.getElementById('svc1-data').textContent = error;
  }
}

async function svc2Click() {
  try {
    const startT = new Date().getTime();
    const res = await fetch(`${platformUrl}/svc2`);
    const endT = new Date().getTime();
    const content = `${await res.text()}\n\ntook: ${endT - startT}ms`;
    document.getElementById('svc2-data').textContent = content;
  } catch (error) {
    document.getElementById('svc2-data').textContent = error;
  }
}

async function svc3Click() {
  try {
    const startT = new Date().getTime();
    const res = await fetch(`${platformUrl}/svc3`);
    const endT = new Date().getTime();
    const content = `${await res.text()}\n\ntook: ${endT - startT}ms`;
    document.getElementById('svc3-data').textContent = content;
  } catch (error) {
    document.getElementById('svc3-data').textContent = error;
  }
}

async function init() {
  const host = document.getElementById('host').textContent;
  platformUrl = `${window.location.protocol}//${host || window.location.host}/api`;

  document.getElementById('apiserver').addEventListener('click', apiserverClick);
  document.getElementById('svc1').addEventListener('click', svc1Click);
  document.getElementById('svc2').addEventListener('click', svc2Click);
  document.getElementById('svc3').addEventListener('click', svc3Click);
}

init();
