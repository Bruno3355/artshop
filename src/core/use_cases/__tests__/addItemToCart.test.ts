import { CartItem } from "../../domain/entities/cart";
import { addItemToCart } from "../AddItemToCart";

describe("addItemToCart", () => {
  // Cria um mock base para reaproveitar nos testes
  const mockProduct: Omit<CartItem, "quantity"> = {
    id: "1",
    name: "Camiseta",
    price: 50.0,
    slug: "camiseta-basica",
    imageUrl: "https://meusite.com/imagem.png",
    miniature: "https://meusite.com/mini.png",
  };

  it("deve adicionar um novo item com quantidade 1 quando o carrinho estiver vazio", () => {
    const cart: CartItem[] = [];

    const result = addItemToCart(cart, mockProduct);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      ...mockProduct,
      quantity: 1,
    });
  });

  it("deve adicionar um novo item com quantidade 1 quando o item ainda não existir no carrinho", () => {
    const cart: CartItem[] = [
      {
        id: "2",
        name: "Calça",
        price: 100.0,
        slug: "calca-jeans",
        imageUrl: "...",
        miniature: "...",
        quantity: 1,
      },
    ];

    const result = addItemToCart(cart, mockProduct);

    expect(result).toHaveLength(2);
    // Verifica se o novo item foi inserido corretamente no final do array
    expect(result[1]).toEqual({
      ...mockProduct,
      quantity: 1,
    });
  });

  it("deve incrementar a quantidade em 1 se o item já existir no carrinho", () => {
    const cart: CartItem[] = [
      { ...mockProduct, quantity: 2 },
      {
        id: "2",
        name: "Calça",
        price: 100.0,
        slug: "calca-jeans",
        imageUrl: "...",
        miniature: "...",
        quantity: 1,
      },
    ];

    const result = addItemToCart(cart, mockProduct);

    // O tamanho do carrinho não deve mudar
    expect(result).toHaveLength(2);

    // A quantidade do produto 1 deve subir para 3
    const updatedItem = result.find((item) => item.id === mockProduct.id);
    expect(updatedItem?.quantity).toBe(3);

    // O outro produto deve permanecer inalterado
    const otherItem = result.find((item) => item.id === "2");
    expect(otherItem?.quantity).toBe(1);
  });

  it("não deve sofrer mutação no array original (imutabilidade)", () => {
    const cart: CartItem[] = [];
    const result = addItemToCart(cart, mockProduct);

    // Garante que a função retornou uma nova referência e não alterou o array original
    expect(cart).toHaveLength(0);
    expect(result).not.toBe(cart);
  });
});
