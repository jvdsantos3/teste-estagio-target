// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentosPorRegiao = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53];
let faturamento = 0;

function faturamentoTotal (faturamentos) {
    for (let i = 0; i < faturamentos.length; i++ ) {
        faturamento += faturamentos[i];
    }

    return faturamento;
}

function percentual (faturamentoTotal, faturamentosPorRegiao) {
    let percentualPorRegiao = [];
    
    faturamentosPorRegiao.forEach(faturamento => {
        let percentual = (100 * faturamento) / faturamentoTotal;
        percentualPorRegiao.push(percentual.toFixed(2));
    });
    
    return console.log(percentualPorRegiao);
}

faturamento = faturamentoTotal(faturamentosPorRegiao);

percentual(faturamento, faturamentosPorRegiao);
