document.addEventListener('DOMContentLoaded', function() {
    const lensesData = [
        { title: '인상주의적 비평', emoji: '😍', description: '작품을 처음 봤을 때 느껴지는 주관적인 감정과 인상을 중심으로 비평합니다.', question: '이 작품은 어떤 감정을 불러일으키나요?', prompt: '이 작품이 주는 전체적인 분위기는?' },
        { title: '형식주의적 비평', emoji: '📏', description: '작품의 색, 선, 구도, 질감 등 시각적 요소와 구조 자체에 집중하여 분석합니다.', question: '작품의 구성 요소들은 어떻게 조화를 이루고 있나요?', prompt: '이 작품의 구도와 색채 사용의 특징은?' },
        { title: '맥락주의적 비평', emoji: '🌍', description: '작품이 만들어진 시대적, 사회적, 역사적 배경과 작가의 삶을 통해 작품을 해석합니다.', question: '이 작품은 어떤 시대적 상황을 반영하고 있나요?', prompt: '이 작가의 삶과 시대적 배경을 알려줘.' },
        { title: '의도주의적 비평', emoji: '✍️', description: '작가가 작품을 통해 전달하고자 했던 메시지나 목적이 무엇인지 탐구합니다.', question: '작가는 이 작품을 통해 무엇을 말하고 싶었을까요?', prompt: '이 작가가 주로 다루는 주제는 뭐야?' },
        { title: '도상학적 비평', emoji: '🧩', description: '작품에 등장하는 상징, 도상, 신화 등을 분석하여 숨겨진 의미를 찾아냅니다.', question: '그림 속 특정 사물은 무엇을 상징하나요?', prompt: '이 그림 속 [특정 사물]은 무엇을 상징해?' },
        { title: '전체주의적 비평', emoji: '🌐', description: '앞서 나온 모든 비평 관점들을 종합하여 작품을 다각적이고 총체적으로 평가합니다.', question: '모든 관점을 고려했을 때, 이 작품의 가치는 무엇일까요?', prompt: '이 작품에 대한 종합적인 비평을 해줘.' }
    ];

    const lensGrid = document.getElementById('lens-grid');
    lensesData.forEach(lens => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'perspective-1000'; // For 3D effect

        const cardInner = document.createElement('div');
        cardInner.className = 'card-flip w-full h-48 md:h-56 relative'; // Fixed height for consistency

        cardInner.innerHTML = `
            <div class="card-front bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center text-center cursor-pointer">
                <div class="text-5xl mb-3">${lens.emoji}</div>
                <h4 class="text-xl font-bold text-teal-800">${lens.title}</h4>
            </div>
            <div class="card-back bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center text-center cursor-pointer">
                <h5 class="text-lg font-bold text-teal-700 mb-2">${lens.question}</h5>
                <p class="text-stone-600 text-sm mb-3">${lens.description}</p>
                <p class="text-stone-500 text-xs italic">챗봇 프롬프트 예시: "${lens.prompt}"</p>
            </div>
        `;

        cardWrapper.appendChild(cardInner);
        lensGrid.appendChild(cardWrapper);

        cardInner.addEventListener('click', () => {
            cardInner.classList.toggle('is-flipped');
        });
    });

    const tabsData = {
        '1': {
            title: '1차시: 챗봇과 함께 작품 해부하기',
            goal: '비평의 다양한 관점(맥락주의, 인상주의, 형식주의)을 이해하고, 챗봇을 활용해 작품을 관찰하고 묘사하는 방법을 배웁니다.',
            materials: '다양한 미술 작품 이미지, 포스트잇, 필기도구, 스마트폰/태블릿',
            steps: [
                { name: '도입 (10분)', detail: '작품 감상 나누기 및 파인만 기법 소개' },
                { name: '전개 (30분)', detail: '인상주의, 형식주의, 맥락주의 관점에서 챗봇 활용 작품 관찰 및 묘사' },
                { name: '정리 및 과제 (5분)', detail: '학습 내용 확인 및 과제 제시' }
            ]
        },
        '2': {
            title: '2차시: 챗봇과 함께 작품 속 이야기 파헤치기',
            goal: '미술 비평 챗봇을 활용하여 의도주의적, 도상학적 비평 관점에서 작품의 내용과 작가의 의도를 분석하고 해석하는 방법을 익힙니다.',
            materials: '지난 시간 과제물, 다양한 미술 작품 이미지, 필기도구, 스마트폰/태블릿',
            steps: [
                { name: '도입 (10분)', detail: '지난 과제 발표 및 작품에 대한 질문 나누기' },
                { name: '전개 (30분)', detail: '의도주의적, 도상학적 관점에서 챗봇 활용 작품 해석' },
                { name: '정리 및 과제 (5분)', detail: '학습 내용 확인 및 과제 제시' }
            ]
        },
        '3': {
            title: '3차시: 나도 비평가!',
            goal: '미술 비평 챗봇의 도움을 받아 다양한 비평 관점들을 통합하여 작품에 대한 자신의 비평적 의견을 정리하고 글로 표현하여 발표합니다.',
            materials: '지난 시간 과제물, 필기도구, 원고지/A4, 스마트폰/태블릿',
            steps: [
                { name: '도입 (10분)', detail: '지난 과제(짧은 비평문) 공유 및 피드백' },
                { name: '전개 (30분)', detail: '전체주의적 비평 관점으로 통합 비평문 작성 및 동료 피드백' },
                { name: '정리 및 발표 (5분)', detail: '작성한 비평문 발표 및 수업 마무리' }
            ]
        }
    };

    function renderTabData(tabId) {
        const data = tabsData[tabId];
        let stepsHtml = '';
        data.steps.forEach((step, index) => {
            stepsHtml += `
                <div class="flex-1 min-w-[200px]">
                    <div class="bg-stone-100 p-4 rounded-lg shadow-sm h-full flex flex-col justify-between">
                        <div>
                            <p class="font-bold text-teal-700">${step.name}</p>
                            <p class="text-stone-600 text-sm mt-1">${step.detail}</p>
                        </div>
                    </div>
                </div>
                ${index < data.steps.length - 1 ? '<div class="flex items-center justify-center px-2 py-2 md:py-0"><span class="text-teal-400 font-bold text-2xl">→</span></div>' : ''}
            `;
        });

        return `
            <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                <h3 class="text-2xl font-bold text-stone-800 mb-4">${data.title}</h3>
                <div class="mb-6 space-y-2">
                    <p><strong class="text-stone-700">🎯 수업 목표:</strong> ${data.goal}</p>
                    <p><strong class="text-stone-700">🎒 준비물:</strong> ${data.materials}</p>
                </div>
                <h4 class="text-lg font-bold text-stone-700 mb-4">수업 활동 흐름</h4>
                <div class="flex flex-col md:flex-row gap-4 md:gap-2 justify-center items-stretch">${stepsHtml}</div>
            </div>
        `;
    }

    Object.keys(tabsData).forEach(key => {
        document.getElementById(`tab-content-${key}`).innerHTML = renderTabData(key);
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active-tab', 'border-teal-600'));
            tabButtons.forEach(btn => btn.classList.add('border-transparent'));
            button.classList.add('active-tab', 'border-teal-600');

            tabContents.forEach(content => {
                if (content.id === `tab-content-${tabId}`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});