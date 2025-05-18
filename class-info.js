const classInfo = {
    'is-cowboy': {
        title: 'KNIGHT',
        description: 'Cavaleiros usam todos os tipos de armas corpo a corpo. Suas principais tarefas em combate são [DPS] ou [TANQUE]. Eles têm várias habilidades que lhes permitem causar dano, atrair a atenção dos oponentes ou dar suporte a aliados. O principal atributo que aumenta o dano é [Força], e o suporte [Destreza].'
    },
    'is-lanceiro': {
        title: 'RANGER',
        description: 'Rangers usa principalmente arcos e bestas, sendo uma arma de longo alcance que pode atingir um único alvo, bem como vários alvos ao mesmo tempo. Suas principais tarefas em combate são [DPS] ou [Suporte]. A principal fonte de dano é [Destreza] e habilidades de suporte (Inteligência).'
    },
    'is-capitan': {
        title: 'WIZARD',
        description: 'Wizards utiliza cajados que não são muito fortes para ataques físicos, mas que aumentam o poder dos feitiços lançados. Sua principal tarefa é apoiar a equipe com feitiços de curto e longo alcance. O dano depende totalmente de [Inteligência].'
    },
    'is-lutador': {
        title: 'PALADIN',
        description: 'Paladinos são guerreiros sagrados. Eles podem ser guerreiros habilidosos, apoiando aliados com suas curas e habilidades de apoio.'
    }
};

document.querySelectorAll('.section__avatar').forEach(el => {
    el.addEventListener('click', function () {
        const className = Array.from(el.classList).find(c => classInfo[c]);
        if (className) {
            document.getElementById('class-title').textContent = classInfo[className].title;
            document.getElementById('class-description').textContent = classInfo[className].description;
            document.getElementById('class-info-modal').style.display = 'flex';
        }
    });
});

document.getElementById('close-modal').onclick = function () {
    document.getElementById('class-info-modal').style.display = 'none';
};
window.onclick = function (event) {
    const modal = document.getElementById('class-info-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};