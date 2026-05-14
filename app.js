/**
 * AgentPulse: Elite Tactical Engine
 * Final Production Version
 */

document.addEventListener('DOMContentLoaded', () => {
    const ui = {
        console: document.getElementById('reasoning-content'),
        momentumBar: document.getElementById('momentum-fill'),
        pressureVal: document.getElementById('pressure-value'),
        modal: document.getElementById('config-modal')
    };

    const thoughts = [
        "Analyzing Manchester City high-press patterns...",
        "Detected defensive gap in Arsenal's left flank.",
        "Predicting 85% probability of transition attack.",
        "Momentum shifting toward Home Side.",
        "Recalculating win probability based on live telemetry."
    ];

    // --- High-Performance Data Burst ---
    window.launchDataBurst = () => {
        const colors = ['#00f2ff', '#39ff14', '#ffffff'];
        for (let i = 0; i < 40; i++) {
            const b = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            b.style.cssText = `position:fixed; left:50vw; top:50vh; width:6px; height:18px; background:${color}; box-shadow:0 0 15px ${color}; z-index:999999; pointer-events:none;`;
            document.body.appendChild(b);
            const angle = Math.random() * Math.PI * 2;
            const velocity = 10 + Math.random() * 15;
            let vx = Math.cos(angle) * velocity;
            let vy = Math.sin(angle) * velocity;
            let px = 0, py = 0, op = 1;
            const step = () => {
                px += vx; py += vy; vx *= 0.94; vy *= 0.94; op -= 0.02;
                b.style.transform = `translate(${px}px, ${py}px) rotate(${angle}rad)`;
                b.style.opacity = op;
                if (op > 0) requestAnimationFrame(step); else b.remove();
            };
            requestAnimationFrame(step);
        }
    };

    const addThought = () => {
        const line = document.createElement('div');
        line.className = 'reasoning-line';
        line.innerHTML = `<span class="timestamp">[${new Date().toLocaleTimeString()}]</span> <span class="thought">${thoughts[Math.floor(Math.random() * thoughts.length)]}</span>`;
        ui.console.prepend(line);
        if (ui.console.children.length > 50) ui.console.lastChild.remove();
    };
    setInterval(addThought, 2000);

    const updateMomentum = () => {
        const val = Math.floor(Math.random() * 40) + 30;
        ui.momentumBar.style.width = `${val}%`;
        ui.pressureVal.innerText = `${val}% High Pressure`;
    };
    updateMomentum(); // Call immediately on load
    setInterval(updateMomentum, 3000);

    window.toggleConfig = () => {
        window.launchDataBurst();
        const isVisible = ui.modal.style.display === 'flex';
        ui.modal.style.display = isVisible ? 'none' : 'flex';
    };

    for(let i=0; i<3; i++) setTimeout(addThought, i * 500);
});
