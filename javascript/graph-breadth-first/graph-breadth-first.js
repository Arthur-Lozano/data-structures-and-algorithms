

function node(value) {
  return {
    value,
    children: []
  };
}

const a = node('a');
const b = node('b');
const c = node('c');
const d = node('d');
const e = node('e');
const f = node('f');
const g = node('g');
const h = node('h');
const i = node('i');
const j = node('j');
const k = node('k');
const l = node('l');
const m = node('m');
const n = node('n');
const o = node('o');


a.children.push(b, c, d);
b.children.push(e, f);
c.children.push(g);
d.children.push(h, i, j);
e.children.push(k);
g.children.push(l, m);
i.children.push(n, o);

const bfs = (firstNode, callback) => {
  const queue = [firstNode];
  while (queue.length) {
    const node = queue.shift();
    callback(node);
    queue.push(...node.children);

  }
};

console.log(a);
