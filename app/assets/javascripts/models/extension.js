ZenlabsBeta.Extension = ZenlabsBeta.Model.extend({
	name: DS.attr('string'),
	download_url: DS.attr('string'),
	short_description: DS.attr('string'),
	notes: DS.attr('string'),
	category: DS.attr('string'),
	author_type: DS.attr('string')
});