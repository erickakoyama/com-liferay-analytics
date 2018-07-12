import objectHash from 'object-hash';

const hash = value =>
	objectHash(value, {
		algorithm: 'md5',
		excludeKeys: key => key === 'screenWidth',
		unorderedObjects: true,
	});

export {hash};
export default hash;