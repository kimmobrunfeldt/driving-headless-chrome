# Driving headless Chrome with Chromeless

WWWeeklies introduction to [Chromeless](https://github.com/graphcool/chromeless).


## What is it?

* Chrome 59 shipped with cross-platform headless support with a few caveats
  * In CI you need to disable GPU
  * A few bugs here and there

  .. but the development is really active and I believe this finally leads
  death of PhantomJS.

* Then a company called Graphcool made a new tool to make using the headless Chrome easier

  The tool is called Chromeless which allows you to run and control headless Chrome easily. The chrome itself can run locally or in AWS lambda (a bit slower)

  They provide pretty good interactive test environment in at https://chromeless.netlify.com.
  Though it seems to be lacking a bit behind with the API development

* It's still quite low-level driver for the chrome remote debugger protocol

  No test assertions helpers etc


## How does it work?

(There's a good picture of it in the Chromeless repo)


## What can you do??

Anything!

* Render PDF receipts
* Use in E2E tests
* Use to render screenshots of all views


## My thoughts

**Good:**

* Setup in lambda
* Easy to install. Just works mostly
* Headless
* Real Chrome, FINALLY

**Not best:**

* PDF support
  * FIRST REMEMBER: works only in headless mode
  * Render results are not perfect (I could be doing something wrong though)

* Testing
  * Evaluation scope
  * No screen recordings or visual clues
  * One of our test cases didn't work at Travis CI. No good way to actually debug :(


## Related

Other links worth mentioning

* https://github.com/jesg/chrominator
