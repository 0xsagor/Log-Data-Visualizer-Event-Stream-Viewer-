let logs = JSON.parse(localStorage.getItem("logs")) || [];

function addLog(level) {
  logs.unshift({
    id: Date.now(),
    level,
    message: `Sample ${level.toUpperCase()} message`,
    time: new Date().toLocaleTimeString()
  });
  localStorage.setItem("logs", JSON.stringify(logs));
  render();
}

function clearLogs() {
  logs = [];
  localStorage.removeItem("logs");
  render();
}

function render() {
  const filter = document.getElementById("level").value;
  const list = document.getElementById("logs");
  list.innerHTML = "";

  logs
    .filter(l => filter === "all" || l.level === filter)
    .forEach(l => {
      const li = document.createElement("li");
      li.className = l.level;
      li.innerText = `[${l.time}] [${l.level.toUpperCase()}] ${l.message}`;
      list.appendChild(li);
    });
}

render();
