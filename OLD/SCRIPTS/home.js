const featureDisplay = document.getElementById('feature-display');
const prevFeatureButton = document.getElementById('prev-feature');
const nextFeatureButton = document.getElementById('next-feature');

const features = ['多功能性', '易用性', '社群互動']; // 添加更多特色
const effects = ['multifunctionality-effect', 'ease-of-use-effect', 'community-interaction-effect']; // 添加對應效果
let currentFeatureIndex = 0;

function applyFeature() {
    featureDisplay.textContent = features[currentFeatureIndex];
    featureDisplay.className = 'feature-effect ' + effects[currentFeatureIndex];
}

prevFeatureButton.addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex - 1 + features.length) % features.length;
    applyFeature();
});

nextFeatureButton.addEventListener('click', () => {
    currentFeatureIndex = (currentFeatureIndex + 1) % features.length;
    applyFeature();
});

applyFeature(); // 初始應用特色