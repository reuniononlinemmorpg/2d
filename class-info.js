const classInfo = {
    'knight': {
        'pt-BR': {
            title: 'CAVALEIRO',
            description: 'Cavaleiros são mestres do combate corpo a corpo, especializados em armas pesadas. Atributos principais: [Força] para dano e [Vitalidade] para resistência. Funções: [Dano] ou [Tanque].'
        },
        'en': {
            title: 'KNIGHT',
            description: 'Knights are masters of melee combat, specialized in heavy weapons. Primary attributes: [Strength] for damage and [Vitality] for resistance. Roles: [Damage] or [Tank].'
        }
    },
    'ranger': {
        'pt-BR': {
            title: 'ARQUEIRO',
            description: 'Arqueiros são especialistas em ataques à distância com arcos e bestas. Atributos principais: [Destreza] para dano e [Agilidade] para esquiva. Funções: [Dano] ou [Suporte].'
        },
        'en': {
            title: 'RANGER',
            description: 'Rangers are experts in ranged attacks with bows and crossbows. Primary attributes: [Dexterity] for damage and [Agility] for evasion. Roles: [Damage] or [Support].'
        }
    },
    'wizard': {
        'pt-BR': {
            title: 'FEITICEIRO',
            description: 'Feiticeiros dominam magias elementais e de controle. Atributos principais: [Inteligência] para poder mágico e [Energia] para regeneração. Funções: [Dano Mágico] ou [Controle].'
        },
        'en': {
            title: 'WIZARD',
            description: 'Wizards master elemental and control spells. Primary attributes: [Intelligence] for magic power and [Energy] for regeneration. Roles: [Magic Damage] or [Crowd Control].'
        }
    },
    'paladin': {
        'pt-BR': {
            title: 'PALADINO',
            description: 'Paladinos são guerreiros sagrados que combinam combate e habilidades de cura. Atributos principais: [Força] e [Fé]. Funções: [Suporte] ou [Tanque].'
        },
        'en': {
            title: 'PALADIN',
            description: 'Paladins are holy warriors who combine combat and healing abilities. Primary attributes: [Strength] and [Faith]. Roles: [Support] or [Tank].'
        }
    }
};

// Mostrar modal quando um avatar for clicado
document.querySelectorAll('.section__avatar').forEach(avatar => {
    avatar.addEventListener('click', function() {
        const classType = this.getAttribute('data-class');
        const currentLang = document.documentElement.lang || 'pt-BR';
        
        document.getElementById('class-title').textContent = classInfo[classType][currentLang].title;
        document.getElementById('class-description').textContent = classInfo[classType][currentLang].description;
        document.getElementById('class-info-modal').classList.add('active');
    });
});

// Fechar modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('class-info-modal').classList.remove('active');
});

// Fechar modal ao clicar fora
document.getElementById('class-info-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// Atualizar modal quando o idioma mudar
document.addEventListener('languageChanged', function() {
    const activeModal = document.getElementById('class-info-modal').classList.contains('active');
    if (activeModal) {
        const activeAvatar = document.querySelector('.section__avatar:hover');
        if (activeAvatar) {
            activeAvatar.click(); // Simula o clique novamente para atualizar o conteúdo
        }
    }
});