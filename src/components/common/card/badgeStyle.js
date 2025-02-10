export const getBadgeStyle = (relationship) => {
  const styles = {
    가족: 'bg-green-100 text-green-500',
    친구: 'bg-blue-100 text-blue-500',
    지인: 'bg-beige-100 text-beige-500',
    동료: 'bg-purple-100 text-purple-600',
  };
  return styles[relationship];
};
