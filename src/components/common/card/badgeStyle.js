export const getBadgeStyle = (relationship) => {
  const styles = {
    family: 'bg-green-100 text-green-500',
    friend: 'bg-blue-100 text-blue-500',
    acquaintance: 'bg-beige-100 text-beige-500',
    colleague: 'bg-purple-100 text-purple-600',
  };
  return styles[relationship];
};

export const getRelationshipText = (relationship) => {
  const relationshipText = {
    family: '가족',
    friend: '친구',
    acquaintance: '지인',
    colleague: '동료',
  };
  return relationshipText[relationship];
};
