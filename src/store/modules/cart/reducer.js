import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        // Veririca se existe um produto no array
        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        // Se existir ele adiciona mais um na qtd do produto
        // Se não, adiciona o novo produto
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        // Veririca se existe um produto no array
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
