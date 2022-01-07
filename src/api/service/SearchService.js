import axios from 'axios';

export class SearchService {
    baseUrl = 'https://api.deezer.com/search';
    
    async buscar(busqueda, paginacion = 0){
        const response = await axios.get(this.baseUrl + '?q=' + busqueda + '&index=' + paginacion);
        return response.data;
    }

    async buscarAlbum(album, paginacion = 0){
        const response = await axios.get(this.baseUrl + '/album?q=' + album + '&index=' + paginacion);
        return response.data;
    }

    async buscarArtista(artista, paginacion = 0){
        const response = await axios.get(this.baseUrl + '/artist?q=' + artista + '&index=' + paginacion);
        return response.data;
    }

    async buscarPlaylist(playlist, paginacion = 0){
        const response = await axios.get(this.baseUrl + '/playlist?q=' + playlist + '&index=' + paginacion);
        return response.data;
    }

    async buscarTrack(track, paginacion = 0){
        const response = await axios.get(this.baseUrl + '/track?q=' + track + '&index=' + paginacion);
        return response.data;
    }

    async buscarUsuario(usuario, paginacion = 0){
        const response = await axios.get(this.baseUrl + '/user?q=' + usuario + '&index=' + paginacion);
        return response.data;
    }
}