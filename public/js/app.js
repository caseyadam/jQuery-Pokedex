$(function(){

  var pokemonSearch;
  var defaultPokemon = '1'
  var defaultPokemonData;

  var initFunc = function(){
    $('.loading-container').addClass('active')
    //https://pokeapi.co/api/v2/pokemon/?limit=811
    //make a button that is a div that shows all the pokemon names pulled from the api. change name and image when you select it.

    defaultPokemonData = $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
        method: "GET",
    });
    defaultPokemonData.done(function(data){
      defaultPokemonData = data;
      $('.loading-container').removeClass('active')
      $('.pokedex h3').text(data.name.toUpperCase());
      $('.poke-img img').attr('src', data.sprites.front_default)
      console.log(data)
    });
    defaultPokemonData.fail(function(jqXHR, textStatus, error){
      alert("Request failed: " + textStatus + ' ' + error);
    });
  }

  initFunc()

    $('.btn').on('click', function(){
      pokemonSearch = $('.pokedex input[type="text"]').val()

      var request = $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
        method: "GET",
    });

    request.done(function(data){
      $('.pokedex h3').text(data.name.toUpperCase());
      $('.poke-img img').attr('src', data.sprites.front_default)
      console.log(data)
    });

    request.fail(function(jqXHR, textStatus, error){
      alert("Request failed: " + textStatus + ' ' + error);
    });
  })
});
