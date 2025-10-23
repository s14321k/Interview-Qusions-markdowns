document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupBody = document.getElementById("popup-body");
  const popupClose = document.getElementById("popup-close");
  const fabMain = document.getElementById("fab-main");
  const fabMenu = document.getElementById("fab-menu");

  const htmlFiles = [
    { name: "Creating Immutable", path: "javaCodeHTML/CreatingImmutable.html" },
//    { name: "Main Features", path: "javaHTML/2.PrimaryMainFeature.html" },
//    { name: "Identifiers", path: "javaHTML/3.IdentifiersClass.html" },
//    { name: "Constructors", path: "javaHTML/4.Constructors.html" },
//    { name: "Strings", path: "javaHTML/5.String.html" }
  ];

  htmlFiles.forEach(file => {
    const btn = document.createElement("button");
    btn.textContent = file.name;
    btn.addEventListener("click", () => openPopup(file.path));
    fabMenu.appendChild(btn);
  });

  fabMain.addEventListener("click", () => {
    fabMenu.classList.toggle("show");
  });

  async function openPopup(file) {
    fabMenu.classList.remove("show");
    popup.classList.add("show");

    try {
      const res = await fetch(file);
      const html = await res.text();
      popupBody.innerHTML = html;
    } catch (err) {
      popupBody.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
      console.error(err);
    }
  }

  popupClose.addEventListener("click", () => popup.classList.remove("show"));

  // Close popup when ESC key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.classList.contains("show")) {
      popup.classList.remove("show");
    }
  });
});

// ===== Make FAB container draggable =====
const fabContainer = document.querySelector('.fab-container');
let isDragging = false;
let offsetX, offsetY;

fabContainer.addEventListener('mousedown', (e) => {
  // allow resizing corner to work normally
  const rect = fabContainer.getBoundingClientRect();
  const isResizingZone =
    e.offsetX > rect.width - 20 && e.offsetY > rect.height - 20;
  if (isResizingZone) return; // don't interfere with resize

  isDragging = true;
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  fabContainer.style.transition = "none"; // disable smooth movement while dragging
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;

  // Keep container inside window bounds
  const maxLeft = window.innerWidth - fabContainer.offsetWidth;
  const maxTop = window.innerHeight - fabContainer.offsetHeight;

  fabContainer.style.left = Math.min(Math.max(0, newLeft), maxLeft) + 'px';
  fabContainer.style.top = Math.min(Math.max(0, newTop), maxTop) + 'px';
  fabContainer.style.right = 'auto';
  fabContainer.style.bottom = 'auto';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  fabContainer.style.transition = "transform 0.3s ease";
});







//const popup = document.getElementById("popup");
//const popupBody = document.getElementById("popup-body");
//const popupClose = document.getElementById("popup-close");
//const fabMain = document.getElementById("fab-main");
//const fabMenu = document.getElementById("fab-menu");
//
//const htmlFiless = [
//  { name: "Buttons", path: "javaHTML/button.html" },
//  { name: "Memory Mgmt", path: "javaHTML/1.JavaPrinciplesBestPractices&MemoryManagement.html" },
//  { name: "Main Features", path: "javaHTML/2.PrimaryMainFeature.html" },
//  { name: "Identifiers", path: "javaHTML/3.IdentifiersClass.html" },
//  { name: "Constructors", path: "javaHTML/4.Constructors.html" },
//  { name: "Strings", path: "javaHTML/5.String.html" }
//];
//
//// Create floating menu buttons dynamically
//htmlFiless.forEach((file, i) => {
//  const btn = document.createElement("button");
//  btn.textContent = `File ${i + 1}`;
//  btn.addEventListener("click", async () => {
//    await openPopup(file);
//  });
//  fabMenu.appendChild(btn);
//});
//
//fabMain.addEventListener("click", () => {
//  fabMenu.classList.toggle("show");
//});
//
//// Popup handling
//async function openPopup(file) {
//  fabMenu.classList.remove("show");
//  popup.classList.add("show");
//
//  try {
//    const res = await fetch(file);
//    const html = await res.text();
//    popupBody.innerHTML = html;
//
//    // Re-run scripts in popup
//    popupBody.querySelectorAll("script").forEach(oldScript => {
//      const newScript = document.createElement("script");
//      if (oldScript.src) newScript.src = oldScript.src;
//      else newScript.textContent = oldScript.textContent;
//      document.body.appendChild(newScript);
//    });
//  } catch (err) {
//    popupBody.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
//    console.error(err);
//  }
//}
//
//popupClose.addEventListener("click", () => {
//  popup.classList.remove("show");
//});