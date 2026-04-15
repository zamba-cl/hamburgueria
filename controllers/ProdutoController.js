import Produto from '../models/Produto.js';

const ProdutoController = {

    create: async (req, res) => {

        try {

            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        }

        catch (error) {

            res.status(400).json({ erro: error.message });
        }
    },

    findAll: async (req, res) => {

        try {

            const produtos = await Produto.findAll();

            if (produtos.length === 0) {

                throw new Error('Nenhum produto encontrado');
            }

            res.status(200).json(produtos);
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {

        try {

            const produto = await Produto.findByPk(req.params.id);

            if (produto) {

                res.status(200).json(produto);
            }
            
            else {
                
                res.status(404).json({ error: 'Produto não encontrado' });
            }            
        }

        catch (error) {

            res.status(500).json({ erro: error.message });
        }
    },

    update: async (req, res) => {

        try {

            const produto = await Produto.findByPk(req.params.id);

            if (produto) {

                await produto.update(req.body);
                res.status(200).json(produto);
            }

            else {

                res.status(404).json({ erro: 'Produto não encontrado' });
            }
        }

        catch (error) {

            res.status(500).json({ erro: error.message });
        }
    },

    delete: async (req, res) => {

        try {

            const produto = await Produto.findByPk(req.params.id);

            if (produto) {

                await produto.destroy();
                res.status(200).json({ message: 'Produto excluido com sucesso' });
            }

            else {

                return res.status(404).json({ erro: 'Produto não encontrado' });
            }

        }

        catch (error) {

            res.status(500).json({ erro: error.message });
        }
    },

    restaure: async (req, res) => {

    try {

      const produto = await Produto.findByPk(req.params.id, { paranoid: false });

      if (produto) {

        await produto.restore();
        res.status(200).json({ message: 'Produto restaurado com sucesso' });
      }

      else {

        res.status(404).json({ error: 'Produto nao encontrado' });
      }
    }

    catch (error) {

      res.status(500).json({ error: error.message });
    }
  }
};

export default ProdutoController;