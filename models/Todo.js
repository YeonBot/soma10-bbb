const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// Define Schema
// const todoSchema = new mongoose.Schema({
//     id: mongoose.Schema.Types.ObjectId,
//     title: { type: String, require: true },
//     contents: { type: String },
//     date: {type: String, default: Date.now().toString()}
// });

const todoSchema = new mongoose.Schema({
    title: { type: String, require: true },
    contents: { type: String },
    date: {type: String, default: Date.now().toString()}
});



mongoose.model('Todo', todoSchema);
module.exports = mongoose.model('Todo');
// model method에 문자열과 스키마를 전달해서 모델을 생성한다. 실제 collection은 Todos로 자동변환된다.

// autoIncrement.initialize(mongoose.connection);
// todoSchema.plugin(autoIncrement.plugin, {
//     model: 'Todo',
//     filed: 'seqnumber',
//     start: 100,
//     step: 10
// });
