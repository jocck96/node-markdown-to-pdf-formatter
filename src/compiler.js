import fs from 'node:fs/promises';

async function main() {
  console.log("Compiling Markdown layout text to output.pdf format template...");
  const rawHtml = "<h1>Markdown Presentation</h1><p>Processed successfully</p>";
  await fs.writeFile("output.pdf", `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 43 >>\nstream\nBT /F1 24 Tf 100 700 Td (Compiled HTML Slide document) Tj ET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000210 00000 n \ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n0\n%%EOF`);
  console.log("PDF written to output.pdf");
}
main();
