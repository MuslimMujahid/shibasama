import axios from 'axios'

const state = {
    trending: [],
    placeholder: [
        {
            id: 1,
            attributes: {
                canonicalTitle: 'Boku no Hero Academia',
                posterImage: {
                    medium: require('@/assets/images/Image.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 2,
            attributes: {
                canonicalTitle: 'Dororo',
                posterImage: {
                    medium: require('@/assets/images/Image2.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 3,
            attributes: {
                canonicalTitle: 'Re:Zero 2nd Season',
                posterImage: {
                    medium: require('@/assets/images/Image3.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 4,
            attributes: {
                canonicalTitle: 'Boku no Hero Academia',
                posterImage: {
                    medium: require('@/assets/images/Image.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 5,
            attributes: {
                canonicalTitle: 'Dororo',
                posterImage: {
                    medium: require('@/assets/images/Image2.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 6,
            attributes: {
                canonicalTitle: 'Re:Zero 2nd Season',
                posterImage: {
                    medium: require('@/assets/images/Image3.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 7,
            attributes: {
                canonicalTitle: 'Boku no Hero Academia',
                posterImage: {
                    medium: require('@/assets/images/Image.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 8,
            attributes: {
                canonicalTitle: 'Dororo',
                posterImage: {
                    medium: require('@/assets/images/Image2.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 9,
            attributes: {
                canonicalTitle: 'Re:Zero 2nd Season',
                posterImage: {
                    medium: require('@/assets/images/Image3.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        },
        {
            id: 10,
            attributes: {
                canonicalTitle: 'Re:Zero 2nd Season',
                posterImage: {
                    medium: require('@/assets/images/Image3.jpg')
                },
                averageRating: '9.0'
            },
            episode: 1
        }
    ]
}

const getters = {
    trending: state => state.trending,
    placeholder: state => state.placeholder
}

const actions = {
    async getAnimeTrending({ commit }) {
        const response = await axios
            .get(`https://kitsu.io/api/edge/trending/anime`)
            .then(res => res.data.data)
            .catch(err => err.message)
        
        commit('setTrending', response)
    }
    
}

const mutations = {
    setTrending: (state, trending) => state.trending = trending 
}

export default {
    state,
    getters,
    actions,
    mutations
}