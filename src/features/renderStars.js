export const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Jumlah bintang penuh
  const halfStar = rating % 1 >= 0.5; // Apakah perlu setengah bintang
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) stars.push('★');
  if (halfStar) stars.push('⯨'); // Bisa ganti ke '⯨' jika mau setengah
  for (let i = 0; i < emptyStars; i++) stars.push('✩');
  return stars.join('');
};
