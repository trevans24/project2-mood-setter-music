var Playlist = require('../models/playlist');
var expect = require('chai').expect;
var	request = require('request');

'use strict'

describe("Constructor", function() {
	var playlist = new Playlist();
	playlist.playlistName = "bling";
	it("should create a new object", function() {   
		expect(typeof(playlist)).to.equal("object");
	});
	it("should have a name", function() {
		expect(playlist.playlistName).to.not.be.empty;
	});
});