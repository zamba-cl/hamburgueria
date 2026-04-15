import Entrega from '../models/Entrega.js';

const EntregaController = {

    create: async (req, res) => {

        try {

            const entrega = await Entrega.create(req.body);
            res.status(201).json(entrega);
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {

        try {

            const entregas = await Entrega.findAll();

            if (entregas.length === 0) {

                throw new Error('Nenhuma entrega encontrada');
            }

            res.status(200).json(entregas);
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {

        try {

            const entrega = await Entrega.findByPk(req.params.id);

            if (entrega) {

                res.status(200).json(entrega);
            }

            else {

                res.status(404).json({ error: 'Entrega nao encontrada' });
            }
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {

        try {

            const entrega = await Entrega.findByPk(req.params.id);

            if (entrega) {

                await entrega.update(req.body);
                res.status(200).json(entrega);
            }

            else {

                res.status(404).json({ error: 'Entrega nao encontrada' });
            }
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {

        try {

            const entrega = await Entrega.findByPk(req.params.id);

            if (entrega) {

                await entrega.destroy();
                res.status(200).json({ message: 'Entrega excluida com sucesso' });
            }

            else {

                res.status(404).json({ error: 'Entrega nao encontrada' });
            }
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    },

    restaure: async (req, res) => {

        try {

            const entrega = await Entrega.findByPk(req.params.id, { paranoid: false });

            if (entrega) {

                await entrega.restore();
                res.status(200).json({ message: 'Entrega restaurada com sucesso' });
            }

            else {

                res.status(404).json({ error: 'Entrega nao encontrada' });
            }
        }

        catch (error) {

            res.status(500).json({ error: error.message });
        }
    }
}

export default new EntregaController();