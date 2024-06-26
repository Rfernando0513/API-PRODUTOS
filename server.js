import app from './src/app.js';
import conexao from './Data/conexao.js';

const PORT = 3000;

conexao.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
    } else {
        console.log('Conexão realizada com sucesso');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
});
