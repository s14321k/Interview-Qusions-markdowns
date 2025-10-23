const htmlFiles = [
  "javaHTML/button.html",
  "javaHTML/1.JavaPrinciplesBestPractices&MemoryManagement.html",
  "javaHTML/2.PrimaryMainFeature.html",
  "javaHTML/3.IdentifiersClass.html",
  "javaHTML/4.Constructors.html",
  "javaHTML/5.String.html"
];

const container = document.getElementById("content");

async function loadHTMLFiles() {
  for (const file of htmlFiles) {
    try {
      const response = await fetch(file);
      const html = await response.text();

      const section = document.createElement("section");
      section.classList.add("html-section");
      section.innerHTML = html;

      // re-run inline scripts if any
      section.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });

      container.appendChild(section);
    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  }

  // ✅ Now that all HTML is loaded, initialize buttons
  initButtons();
}

function initButtons() {
  const expandBtn = document.getElementById('expand-all-btn');
  const collapseBtn = document.getElementById('collapse-all-btn');
  const themeBtn = document.getElementById('theme-toggle');

  if (!expandBtn || !collapseBtn || !themeBtn) {
    console.warn('Some buttons not found — make sure IDs match');
    return;
  }

  function expandAll() {
    const detailsElements = document.querySelectorAll('.tree-container details');
    detailsElements.forEach(detail => detail.setAttribute('open', ''));
  }

  function collapseAll() {
    const detailsElements = document.querySelectorAll('.tree-container details');
    detailsElements.forEach(detail => detail.removeAttribute('open'));
  }

  expandBtn.addEventListener('click', expandAll);
  collapseBtn.addEventListener('click', collapseAll);
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const darkMode = document.body.classList.contains('dark');
    themeBtn.textContent = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
}

loadHTMLFiles();




//Got it 👍 — your issue is that **the buttons defined inside the dynamically loaded HTML fragments** aren’t working after the load.
//
//Let’s break down **why** and then fix it cleanly.
//
//---
//
//## 🧠 The Problem
//
//Your current code runs this part **immediately when the DOM loads**:
//
//```js
//document.addEventListener('DOMContentLoaded', function() {
//  const expandBtn = document.getElementById('expand-all-btn');
//  const collapseBtn = document.getElementById('collapse-all-btn');
//  const themeBtn = document.getElementById('theme-toggle');
//  ...
//});
//```
//
//But at that time — the dynamically loaded HTML (your `button.html` and others) **hasn’t been fetched and added yet**.
//So `getElementById()` returns `null`, and your event listeners never get attached.
//➡️ Result: Buttons don’t work.
//
//---
//
//## ✅ The Fix
//
//You have **two** good options, depending on how you prefer to structure your logic.
//
//---
//
//### 🩵 **Option 1 — Initialize after loading all HTML**
//
//Move your button event listener logic **after** the dynamic HTML is loaded.
//
//Here’s the fixed version:
//
//```js
//const htmlFiles = [
//  "javaHTML/button.html",
//  "javaHTML/1.JavaPrinciplesBestPractices&MemoryManagement.html",
//  "javaHTML/2.PrimaryMainFeature.html",
//  "javaHTML/3.IdentifiersClass.html"
//];
//
//const container = document.getElementById("content");
//
//async function loadHTMLFiles() {
//  for (const file of htmlFiles) {
//    try {
//      const response = await fetch(file);
//      const html = await response.text();
//
//      const section = document.createElement("section");
//      section.classList.add("html-section");
//      section.innerHTML = html;
//
//      // re-run inline scripts if any
//      section.querySelectorAll("script").forEach(oldScript => {
//        const newScript = document.createElement("script");
//        if (oldScript.src) {
//          newScript.src = oldScript.src;
//        } else {
//          newScript.textContent = oldScript.textContent;
//        }
//        document.body.appendChild(newScript);
//      });
//
//      container.appendChild(section);
//    } catch (err) {
//      console.error(`Error loading ${file}:`, err);
//    }
//  }
//
//  // ✅ Now that all HTML is loaded, initialize buttons
//  initButtons();
//}
//
//function initButtons() {
//  const expandBtn = document.getElementById('expand-all-btn');
//  const collapseBtn = document.getElementById('collapse-all-btn');
//  const themeBtn = document.getElementById('theme-toggle');
//
//  if (!expandBtn || !collapseBtn || !themeBtn) {
//    console.warn('Some buttons not found — make sure IDs match');
//    return;
//  }
//
//  function expandAll() {
//    const detailsElements = document.querySelectorAll('.tree-container details');
//    detailsElements.forEach(detail => detail.setAttribute('open', ''));
//  }
//
//  function collapseAll() {
//    const detailsElements = document.querySelectorAll('.tree-container details');
//    detailsElements.forEach(detail => detail.removeAttribute('open'));
//  }
//
//  expandBtn.addEventListener('click', expandAll);
//  collapseBtn.addEventListener('click', collapseAll);
//  themeBtn.addEventListener('click', () => {
//    document.body.classList.toggle('dark');
//    const darkMode = document.body.classList.contains('dark');
//    themeBtn.textContent = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
//  });
//}
//
//loadHTMLFiles();
//```
//
//👉 This ensures your event listeners are attached **after** the DOM content (including dynamically fetched HTML) is ready.
//
//---
//
//### 🩶 **Option 2 — Use event delegation (recommended for dynamic content)**
//
//If buttons might be replaced or reloaded later, you can use **event delegation** on the document level.
//
//Example:
//
//```js
//document.addEventListener('click', (e) => {
//  if (e.target.id === 'expand-all-btn') {
//    document.querySelectorAll('.tree-container details').forEach(d => d.setAttribute('open', ''));
//  } else if (e.target.id === 'collapse-all-btn') {
//    document.querySelectorAll('.tree-container details').forEach(d => d.removeAttribute('open'));
//  } else if (e.target.id === 'theme-toggle') {
//    document.body.classList.toggle('dark');
//    const darkMode = document.body.classList.contains('dark');
//    e.target.textContent = darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
//  }
//});
//```
//
//✅ This approach works **even if the buttons are added later** because the event listener is global.
//
//---
//
//## ⚡ Recommended Final Setup
//
//* Keep your HTML fragments lightweight (no redundant `<html>` or `<head>` tags).
//* Use Option 1 or Option 2 for initializing interactivity.
//* Keep all CSS/JS shared at the top-level (`index.html`) — no need to repeat them inside fragments.
//
//---
//
//Would you like me to make your **final full working example** (HTML + CSS + JS + one of your button fragments) so you can copy-paste and test directly?
