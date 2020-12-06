# Demo Next.js-Expo App for Web and Mobile

This is a barebones app showing how to use javascript to develop for web and mobile.

1. The app starts in pages/index.js (for web) or App.js (for expo), but in both cases simply calls out to MainContainer
2. navigation/MainContainer defines the screens that will be shown in the app, and leaves all content to them.
3. src/screens/QuizScreen.js lays out the quiz elements, selecting a random question from data/questions.js
4. The `src/components` folder holds

- AnswerList, to list the answers, and
- AnswerEntry, a text input for typing the answer (giving feedback if you're on the right track)

5. the `src/elements` folder holds reuseable interface elements (buttons, text boxes, etc)

6. `src/utils` holds

- `hooks.js`, our standard collection of useful react hooks
- `theme.js`, demonstrating how we abstract presentation from content
