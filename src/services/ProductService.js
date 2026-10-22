export const ProductService = async () => {
  try {
    const response = await fetch('./public/data/products.json');
    if (!response.ok) {
      throw new Error('Error en la petición');
    }
    return await response.json();
  } catch (error) {
    console.error("Hubo un problema:", error);
    throw error;
  }
};