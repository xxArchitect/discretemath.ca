import { MultipleChoiceQuestion } from "./questions/MultipleChoiceQuestion";

class Examination {
  title;
  author;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  constructQuestions(questions) {
    return questions.map((question) => this.constructQuestion(question));
  }

  constructQuestion(question) {
    // TODO: switch on question.format to create the desired question child class
    // ex: if question is a multiple choice question... create a multiple choice question
    switch (question.format) {
      case "MultipleChoice":
        return new MultipleChoiceQuestion(question.body, question.options);

      default:
        throw "Not implemented";
    }
  }
}

export { Examination };
