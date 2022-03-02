const CONTRACT_ADDRESS = '0xa90F4682A298a1eDbD88d0C86168B8B68d5F9D3B';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    power: characterData.power.toNumber(),
    maxPower: characterData.maxPower.toNumber(),
    influence: characterData.influence.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };