// ============================================================
// UI RENDERING - Don't change unless modifying UI
// ============================================================

function renderUI() {
    const tabNav = document.getElementById('tabNav');
    const mainContainer = document.getElementById('mainContainer');

    // Clear
    tabNav.innerHTML = '';
    mainContainer.innerHTML = '';

    // Create model buttons
    mahindraData.forEach((model, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = model.name;
        btn.onclick = () => showModel(index);
        tabNav.appendChild(btn);
    });

    // Create model cards
    mahindraData.forEach((model, modelIndex) => {
        const card = document.createElement('div');
        card.className = `model-card ${modelIndex === 0 ? '' : 'hidden'}`;
        card.id = model.id;

        let html = `
            <div class="model-header">
                <div class="model-icon"><i class="${model.icon}"></i></div>
                <div class="model-title">
                    <h2>${model.name}</h2>
                    <p>${model.subtitle}</p>
                </div>
            </div>

            <div class="variant-tabs">
        `;

        // Add variant tabs
        model.variants.forEach((variant, vIndex) => {
            html += `<button class="variant-tab ${vIndex === 0 ? 'active' : ''}" onclick="showVariant('${model.id}', ${vIndex})">${variant.id}</button>`;
        });

        html += `</div>`;

        // Add variant contents
        model.variants.forEach((variant, vIndex) => {
            html += `
                <div class="variant-content ${vIndex === 0 ? 'active' : ''}" id="${model.id}-variant-${vIndex}">
                    <div class="price-box">${variant.price}</div>

                    <div class="engine-box">
                        <h4>Engine</h4>
                        <div class="engine-specs">
                            <div class="spec-item">
                                <label>Type</label>
                                <value>${variant.engine.type}</value>
                            </div>
                            <div class="spec-item">
                                <label>Power</label>
                                <value>${variant.engine.power}</value>
                            </div>
                            <div class="spec-item">
                                <label>Torque</label>
                                <value>${variant.engine.torque}</value>
                            </div>
                            <div class="spec-item">
                                <label>Transmission</label>
                                <value>${variant.engine.transmission}</value>
                            </div>
                        </div>
                    </div>

                    <div class="features-section">
                        <h3 class="features-header">Features</h3>
            `;

            // Add features
            Object.entries(variant.features).forEach(([category, items]) => {
                const icon = featureIcons[category] || 'fas fa-star';
                html += `
                    <div class="feature-group">
                        <h5><i class="${icon}"></i> ${category}</h5>
                        <ul>
                            ${items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });

            html += `</div></div>`;
        });

        card.innerHTML = html;
        mainContainer.appendChild(card);

        // Add divider
        if (modelIndex < mahindraData.length - 1) {
            const divider = document.createElement('div');
            divider.className = 'divider';
            mainContainer.appendChild(divider);
        }
    });
}

// Show model
function showModel(index) {
    document.querySelectorAll('.model-card').forEach(card => card.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    const model = mahindraData[index];
    document.getElementById(model.id).classList.remove('hidden');
    document.querySelectorAll('.tab-btn')[index].classList.add('active');
}

// Show variant
function showVariant(modelId, variantIndex) {
    const card = document.getElementById(modelId);
    const contents = card.querySelectorAll('.variant-content');
    const tabs = card.querySelectorAll('.variant-tab');

    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    contents[variantIndex].classList.add('active');
    tabs[variantIndex].classList.add('active');

    contents[variantIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Initialize
renderUI();