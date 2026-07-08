// Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, push, remove, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Configuração Firebase do Usuário
const firebaseConfig = {
  apiKey: "AIzaSyCsdqJP0z0cBnL_BmGJ6fUYRSAQaDyLahg",
  authDomain: "recursoterapeutico-66d8f.firebaseapp.com",
  databaseURL: "https://recursoterapeutico-66d8f-default-rtdb.firebaseio.com",
  projectId: "recursoterapeutico-66d8f",
  storageBucket: "recursoterapeutico-66d8f.firebasestorage.app",
  messagingSenderId: "990679594129",
  appId: "1:990679594129:web:4e1f1587da4e587521bb30"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Dados Iniciais Consolidados
const initialData = [
    { codigo: 'DMT0037', descricao: 'KIT COZINHA INFANTIL 11PCS INO', qtdOriginal: 6, unidade: 'UN' },
    { codigo: 'DMT6174', descricao: 'MALETA DOUTOR DM COM ACESSORIO', qtdOriginal: 12, unidade: 'UN' },
    { codigo: 'DMT7100', descricao: 'KIT BARBEIRO VIP', qtdOriginal: 8, unidade: 'UN' },
    { codigo: 'DMT7101', descricao: 'KIT SALAO DE BELEZA VIP', qtdOriginal: 10, unidade: 'UN' },
    { codigo: 'DMT5100', descricao: 'ESTRELA LALA BATE E VOLTA MUSI', qtdOriginal: 12, unidade: 'UN' },
    { codigo: 'DMT5101', descricao: 'TRENZINHO BATE E VOLTA', qtdOriginal: 12, unidade: 'UN' },
    { codigo: 'DMT0218', descricao: 'COLECAO PLANETA ANIMAL KIT FIG', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT0211', descricao: 'COLECAO PLANETA ANIMAL KIT FIG', qtdOriginal: 36, unidade: 'UN' },
    { codigo: 'DMT6903', descricao: 'BRINQUEDO DANCING MUSICAL TE', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT6259', descricao: 'CARRO FRICCAO CORRIDA MALUCO', qtdOriginal: 36, unidade: 'UN' },
    { codigo: 'DMT6298', descricao: 'CARRO FRICCAO PULL BACK IMPACT', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT5736', descricao: 'DIDATICOS APRENDA BRINCANDO RE', qtdOriginal: 36, unidade: 'UN' },
    { codigo: 'DMT6730', descricao: 'DIDATICOS APRENDA BRINCANDO FR', qtdOriginal: 36, unidade: 'UN' },
    { codigo: 'DMT6776', descricao: 'DIDATICOS APRENDA BRINCANDO TR', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT5735', descricao: 'DIDATICOS APRENDA BRINCANDO AN', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT5725', descricao: 'DIDATICOS APRENDA BRINCANDO RE', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT5730', descricao: 'DIDATICOS APRENDA BRINCANDO CO', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT5731', descricao: 'DIDATICOS APRENDA BRINCANDO CO', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT0200', descricao: 'APRENDA BRINCANDO MATEMATICA', qtdOriginal: 12, unidade: 'UN' },
    { codigo: 'DMT0286', descricao: 'APRENDA BRINCANDO MALETA DE AT', qtdOriginal: 12, unidade: 'UN' },
    { codigo: 'DMT0048', descricao: 'APRENDA BRINCANDO LABIRINTO MA', qtdOriginal: 12, unidade: 'UN' },
    { codigo: 'DMT0015', descricao: 'DIDATICOS APRENDA BRINCANDO QU', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT7122', descricao: 'QUADRO DESENHO MAGNETICO COM 1', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT6640', descricao: 'AREIA DIVERTIDA CASTELO 300G', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT6637', descricao: 'AREIA DIVERTIDA POCKET BICHOS', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT6765', descricao: 'DM BLOCKS MAGNETICOS 47 PECAS', qtdOriginal: 8, unidade: 'UN' },
    { codigo: 'DMT6311', descricao: 'PIAO MALUCO FLASH BOLA CORES', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT7068', descricao: 'CAPIVARA DIVERTIDA', qtdOriginal: 18, unidade: 'UN' },
    { codigo: 'DMT6932', descricao: 'COLECAO PET DOG STRETCH SORTID', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT6933', descricao: 'COLECAO PET CAT SORTIDOS', qtdOriginal: 48, unidade: 'UN' },
    { codigo: 'DMT7161', descricao: 'JOGO RL GAMES DESAFIO DO PUZZL', qtdOriginal: 36, unidade: 'UN' },
    { codigo: 'DMT7162', descricao: 'JOGO RL GAMES DESAFIO DA SETA', qtdOriginal: 36, unidade: 'UN' },
    { codigo: 'DMT6733', descricao: 'JOGO TORRE DIVERTIDA 54 PECAS', qtdOriginal: 24, unidade: 'UN' },
    { codigo: 'DMT0058', descricao: 'JOGO DOGAO PEGA PEGA', qtdOriginal: 12, unidade: 'UN' },
    { codigo: '9017', descricao: 'LETRAS & IMAGENS', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '9018', descricao: 'OBJETOS & FUNCOES', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '9020', descricao: 'RECONHECER E CLASSIFICAR', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6003', descricao: 'LABIRINTO NO CAMPO', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6013', descricao: 'EMPILHE OS TUCANOS - JOGUINHOS DE BOLSA', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7073', descricao: 'MINI LOTO - ANIMAIS PELO MUNDO', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7034', descricao: 'JOGUINHO DE BOLSA: MOVA-SE COELHINHO', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6012', descricao: 'JOGUINHOS DE BOLSA: JOGO DA MEMORIA ANIMAIS', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7010', descricao: 'JOGUINHOS DE BOLSA: JOGO DE ACAO', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7059', descricao: 'TABUADA DO 1 A 10 COLECAO JOGUINHOS DE BOLSA', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7060', descricao: 'MINI TANGRAM COLECAO JOGUINHOS DE BOLSA', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7050', descricao: 'PEGA PEGA PUM PUM JOGUINHOS DE BOLSA', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '7051', descricao: 'ALINHAVOS JOGUINHOS DE BOLSA', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7006', descricao: 'JOGUINHOS DE BOLSA: MINI BINGO', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '6030', descricao: 'QUEBRA-CABECA GIGANTE CONTANDO ATE 5', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '6021', descricao: 'QUEBRA-CABECA BABY ANIMAIS E FILHOTES', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7047', descricao: 'TOQUE EMBOQUE', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7065', descricao: 'SEQUENCIA DIA A DIA DO URSINHO', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '7033', descricao: 'ALIMENTE BEM O MACAQUINHO', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '6025', descricao: 'QUEBRA CABECA GIGANTE UNICORNIO', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6027', descricao: 'QUEBRA CABECA GIGANTE FUNDO DO MAR', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7066', descricao: 'PACK COM 8 QUEBRA-CABECAS 09 PECAS ANIMAIS', qtdOriginal: 1, unidade: 'UN' },
    { codigo: '7004', descricao: 'SEQUENCIA LOGICA MINHA ROTINA', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7064', descricao: 'EU ME SINTO ASSIM URSINHO', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '7063', descricao: 'REQUINHAS PRIMEIROS TRACOS', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6074', descricao: 'FAMILIA GATINHOS EXPRESSOES', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6067', descricao: 'A DONA ARANHA', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7048', descricao: 'ARGOLA DOS URSINHOS', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6044', descricao: 'EQUILIBRE O URSINHO', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7026', descricao: 'QUEBRA-CABECA CRIATIVO', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '7061', descricao: 'QUEM ESTA AI ?', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '6066', descricao: 'FORMAS MAGICAS', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7015', descricao: 'VAMOS DESENHAR ? FIGURAS VAZADAS', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7018', descricao: 'MEMORIA TROCA TEMA', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '7001', descricao: 'LOTO DAS LETRAS', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '6063', descricao: 'QUADRO MINHA ROTINA ESTRELINHAS', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '6046', descricao: 'QUEBRA CABECA SOLETRANDO ANIMAIS', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7074', descricao: 'MOSAICO CRIATIVO', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '6019', descricao: 'ALFABETO DIVERTIDO', qtdOriginal: 12, unidade: 'UN' },
    { codigo: '7075', descricao: 'PRIMEIROS ENCAIXES - CORES E FORMAS', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '7023', descricao: 'TETRIS DO TUCANO', qtdOriginal: 3, unidade: 'UN' },
    { codigo: '6070', descricao: 'QUEM SOU EU ?', qtdOriginal: 9, unidade: 'UN' },
    { codigo: '7025', descricao: 'COLMEIA DOS BICHINHOS', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7043', descricao: 'CONTE AS CENOURINHAS', qtdOriginal: 6, unidade: 'UN' },
    { codigo: '7005', descricao: 'ALFABETO CURSIVO ESCREVA E APAGUE', qtdOriginal: 9, unidade: 'UN' }
];

let estoque = [];
let historico = [];

// Firebase Sync
onValue(ref(db, 'estoque'), (snapshot) => {
    const data = snapshot.val();
    if (data) {
        estoque = Object.values(data);
    } else {
        estoque = initialData.map(i => ({...i, qtdAtual: i.qtdOriginal}));
        set(ref(db, 'estoque'), estoque);
    }
    updateAllViews();
});

onValue(ref(db, 'historico'), (snapshot) => {
    const data = snapshot.val();
    historico = data ? Object.values(data) : [];
    updateAllViews();
});

// Navegação
document.querySelectorAll('nav li').forEach(item => {
    item.addEventListener('click', function() {
        const pageId = this.getAttribute('data-page');
        document.querySelectorAll('nav li').forEach(li => li.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        const activePage = document.getElementById(pageId);
        activePage.classList.add('active');
        activePage.style.display = 'block';
        updateAllViews();
    });
});

function updateAllViews() {
    renderDashboard();
    renderItens();
    popularSelect();
    renderHistorico();
}

function renderDashboard() {
    const totalItensCadastrados = estoque.length;
    const totalUnidadesEstoque = estoque.reduce((acc, curr) => acc + curr.qtdAtual, 0);
    const totalUnidadesSaida = historico.reduce((acc, curr) => acc + curr.qtd, 0);
    
    document.getElementById('totalEstoque').textContent = totalUnidadesEstoque;
    document.getElementById('totalSaidas').textContent = totalUnidadesSaida;
    document.getElementById('totalItens').textContent = totalItensCadastrados;

    const tbody = document.querySelector('#summaryTable tbody');
    if(!tbody) return;
    tbody.innerHTML = '';
    estoque.forEach(item => {
        const saidasItem = historico.filter(h => h.itemCodigo === item.codigo).reduce((acc, curr) => acc + curr.qtd, 0);
        tbody.innerHTML += `<tr>
            <td>${item.codigo}</td>
            <td>${item.descricao}</td>
            <td>${item.qtdOriginal}</td>
            <td>${saidasItem}</td>
            <td style="font-weight:bold; color: ${item.qtdAtual === 0 ? 'red' : 'green'}">${item.qtdAtual}</td>
        </tr>`;
    });
}

function renderItens() {
    const tbody = document.querySelector('#itensTable tbody');
    if(!tbody) return;
    tbody.innerHTML = '';
    estoque.forEach((item, index) => {
        tbody.innerHTML += `<tr>
            <td>${item.codigo}</td>
            <td>${item.descricao}</td>
            <td>${item.qtdOriginal}</td>
            <td>${item.unidade}</td>
            <td>
                <button class="btn-icon" onclick="window.editarItem(${index})"><i class="fas fa-edit"></i></button>
                <button class="btn-icon" style="color:red" onclick="window.excluirItem(${index})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    });
}

function renderHistorico() {
    const tbody = document.querySelector('#historyTable tbody');
    if(!tbody) return;
    tbody.innerHTML = '';
    historico.slice().reverse().forEach((reg, index) => {
        const realIndex = historico.length - 1 - index;
        tbody.innerHTML += `<tr>
            <td>${reg.data}</td>
            <td>${reg.itemDesc}</td>
            <td>${reg.qtd}</td>
            <td>${reg.responsavel}</td>
            <td>${reg.destino}</td>
            <td>
                <button class="btn-primary" style="padding:5px 10px; font-size: 0.8rem" onclick="window.regerarPDF(${realIndex})">PDF</button>
                <button class="btn-icon" onclick="window.editarSaida(${realIndex})"><i class="fas fa-edit"></i></button>
                <button class="btn-icon" style="color:red" onclick="window.excluirSaida(${realIndex})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    });
}

function popularSelect() {
    const select = document.getElementById('itemSelect');
    if(!select) return;
    select.innerHTML = '<option value="">Selecione...</option>';
    const estoqueOrdenado = [...estoque].sort((a, b) => a.descricao.localeCompare(b.descricao));
    estoqueOrdenado.forEach((item) => {
        if(item.qtdAtual > 0) {
            const originalIndex = estoque.findIndex(i => i.codigo === item.codigo);
            select.innerHTML += `<option value="${originalIndex}">${item.codigo} - ${item.descricao} (Saldo: ${item.qtdAtual})</option>`;
        }
    });
}

// Lógica de Saída
let editSaidaIndex = -1;
document.getElementById('saidaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const idx = document.getElementById('itemSelect').value;
    const qtd = parseInt(document.getElementById('quantidade').value);
    const responsavel = document.getElementById('responsavel').value;
    const destino = document.getElementById('destino').value;

    if(editSaidaIndex === -1) {
        if(estoque[idx].qtdAtual < qtd) return alert('Estoque insuficiente!');
        estoque[idx].qtdAtual -= qtd;
        historico.push({
            data: new Date().toLocaleString('pt-BR'),
            itemCodigo: estoque[idx].codigo,
            itemDesc: estoque[idx].descricao,
            qtd, responsavel, destino,
            unidade: estoque[idx].unidade
        });
    } else {
        const oldReg = historico[editSaidaIndex];
        const itemIdx = estoque.findIndex(i => i.codigo === oldReg.itemCodigo);
        estoque[itemIdx].qtdAtual += oldReg.qtd;
        if(estoque[itemIdx].qtdAtual < qtd) {
            estoque[itemIdx].qtdAtual -= oldReg.qtd;
            return alert('Estoque insuficiente!');
        }
        estoque[itemIdx].qtdAtual -= qtd;
        historico[editSaidaIndex] = {...oldReg, qtd, responsavel, destino};
        editSaidaIndex = -1;
        document.querySelector('#nova-saida h1').textContent = 'Registrar Nova Saída';
        document.getElementById('itemSelect').disabled = false;
    }
    saveToFirebase();
    this.reset();
    alert('Sucesso!');
});

// Funções Globais
window.toggleItemForm = function() {
    const container = document.getElementById('itemFormContainer');
    const btn = document.getElementById('btnToggleForm');
    if (container.style.display === 'none') {
        container.style.display = 'block';
        btn.textContent = 'Cancelar';
        btn.classList.replace('btn-primary', 'btn-secondary');
    } else {
        container.style.display = 'none';
        btn.textContent = '+ Inserir Novo Item';
        btn.classList.replace('btn-secondary', 'btn-primary');
        document.getElementById('itemForm').reset();
        document.getElementById('editIndex').value = '';
        document.getElementById('formItemTitle').textContent = 'Cadastrar Novo Item';
    }
};

window.editarItem = function(index) {
    const item = estoque[index];
    const container = document.getElementById('itemFormContainer');
    container.style.display = 'block';
    document.getElementById('formItemTitle').textContent = 'Editar Item';
    document.getElementById('itemCodigo').value = item.codigo;
    document.getElementById('itemDescricao').value = item.descricao;
    document.getElementById('itemQtd').value = item.qtdOriginal;
    document.getElementById('itemUnidade').value = item.unidade;
    document.getElementById('editIndex').value = index;
    document.getElementById('btnToggleForm').textContent = 'Cancelar';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const idx = document.getElementById('editIndex').value;
    const itemData = {
        codigo: document.getElementById('itemCodigo').value,
        descricao: document.getElementById('itemDescricao').value,
        qtdOriginal: parseInt(document.getElementById('itemQtd').value),
        unidade: document.getElementById('itemUnidade').value
    };

    if(idx === '') {
        estoque.push({...itemData, qtdAtual: itemData.qtdOriginal});
    } else {
        const diff = itemData.qtdOriginal - estoque[idx].qtdOriginal;
        estoque[idx] = {...itemData, qtdAtual: Math.max(0, estoque[idx].qtdAtual + diff)};
    }
    saveToFirebase();
    window.toggleItemForm();
});

window.excluirItem = function(index) {
    if(confirm('Excluir item?')) {
        estoque.splice(index, 1);
        saveToFirebase();
    }
};

window.editarSaida = function(index) {
    const reg = historico[index];
    const itemIdx = estoque.findIndex(i => i.codigo === reg.itemCodigo);
    document.querySelector('nav li[data-page="nova-saida"]').click();
    document.querySelector('#nova-saida h1').textContent = 'Editar Registro';
    document.getElementById('itemSelect').value = itemIdx;
    document.getElementById('itemSelect').disabled = true;
    document.getElementById('quantidade').value = reg.qtd;
    document.getElementById('responsavel').value = reg.responsavel;
    document.getElementById('destino').value = reg.destino;
    editSaidaIndex = index;
};

window.excluirSaida = function(index) {
    if(confirm('Estornar estoque e excluir?')) {
        const reg = historico[index];
        const itemIdx = estoque.findIndex(i => i.codigo === reg.itemCodigo);
        if(itemIdx !== -1) estoque[itemIdx].qtdAtual += reg.qtd;
        historico.splice(index, 1);
        saveToFirebase();
    }
};

window.regerarPDF = function(index) {
    const reg = historico[index];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.setTextColor(77, 187, 177);
    doc.text('NEUROPSICOCENTRO', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(44, 62, 80);
    doc.text('REGISTRO DE SAÍDA DE BEM IMOBILIZADO', 105, 30, { align: 'center' });
    doc.autoTable({
        startY: 40,
        head: [['Campo', 'Informação']],
        body: [['Data', reg.data], ['Código', reg.itemCodigo], ['Descrição', reg.itemDesc], ['Quantidade', `${reg.qtd} ${reg.unidade}`], ['Responsável', reg.responsavel], ['Destino/Motivo', reg.destino]],
        theme: 'striped',
        headStyles: { fillColor: [77, 187, 177] }
    });
    const finalY = doc.lastAutoTable.finalY + 30;
    doc.line(30, finalY, 90, finalY);
    doc.text('Assinatura Responsável', 35, finalY + 5);
    doc.line(120, finalY, 180, finalY);
    doc.text('Visto Recebimento', 135, finalY + 5);
    doc.save(`Saida_${reg.itemCodigo}_${Date.now()}.pdf`);
};

function saveToFirebase() {
    set(ref(db, 'estoque'), estoque);
    set(ref(db, 'historico'), historico);
}
