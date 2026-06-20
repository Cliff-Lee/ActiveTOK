const mathmlByExpression = new Map([
  [
    "a^2 + b^2 = c^2",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>`
  ],
  [
    "1 + 2 + ... + n = n(n+1)/2",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mo>⋯</mo><mo>+</mo><mi>n</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy="false">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mn>2</mn></mfrac></math>`
  ],
  [
    "P(H | +) = 9 / (9 + 99) = 1 / 12 ≈ 8.3%",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo stretchy="false">(</mo><mi>H</mi><mo>|</mo><mo>+</mo><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>9</mn><mrow><mn>9</mn><mo>+</mo><mn>99</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>≈</mo><mn>8.3</mn><mo>%</mo></math>`
  ],
  [
    "P(H | +)",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo stretchy="false">(</mo><mi>H</mi><mo>|</mo><mo>+</mo><mo stretchy="false">)</mo></math>`
  ],
  [
    "P(+ | H)",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo stretchy="false">(</mo><mo>+</mo><mo>|</mo><mi>H</mi><mo stretchy="false">)</mo></math>`
  ],
  [
    "P(A | B) ≠ P(B | A)",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mo>|</mo><mi>B</mi><mo stretchy="false">)</mo><mo>≠</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo>|</mo><mi>A</mi><mo stretchy="false">)</mo></math>`
  ],
  [
    "P(success | A) > P(success | B)",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo stretchy="false">(</mo><mtext>success</mtext><mo>|</mo><mi>A</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mi>P</mi><mo stretchy="false">(</mo><mtext>success</mtext><mo>|</mo><mi>B</mi><mo stretchy="false">)</mo></math>`
  ],
  [
    "mean = Σx / n",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mtext>mean</mtext><mo>=</mo><mfrac><mrow><mo>Σ</mo><mi>x</mi></mrow><mi>n</mi></mfrac></math>`
  ],
  [
    "n → n + 1",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>n</mi><mo>→</mo><mi>n</mi><mo>+</mo><mn>1</mn></math>`
  ],
  [
    "∞ + 1 = ∞",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>∞</mi><mo>+</mo><mn>1</mn><mo>=</mo><mi>∞</mi></math>`
  ],
  [
    "log10(1000) = 3",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>log</mi><mn>10</mn></msub><mo stretchy="false">(</mo><mn>1000</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></math>`
  ],
  [
    "r = 0.82",
    `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi><mo>=</mo><mn>0.82</mn></math>`
  ]
]);

export function htmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function mathFallback(expression) {
  return `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mtext>${htmlEscape(expression)}</mtext></math>`;
}

export function htmlWithMath(value) {
  return String(value ?? "")
    .split(/(\[\[math:[\s\S]*?\]\])/g)
    .map(part => {
      const match = part.match(/^\[\[math:([\s\S]*?)\]\]$/);
      if (!match) return htmlEscape(part);
      const expression = match[1].trim();
      return mathmlByExpression.get(expression) || mathFallback(expression);
    })
    .join("");
}

export function plainMath(value) {
  return String(value ?? "").replace(/\[\[math:([\s\S]*?)\]\]/g, (_, expression) => expression.trim());
}

export function markdownWithMath(value) {
  return String(value ?? "").replace(/\[\[math:([\s\S]*?)\]\]/g, (_, expression) => `$${expression.trim()}$`);
}
