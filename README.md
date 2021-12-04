# Aggregation for Analytics

The objective of this assignment is to see how well you can specify data-transformations.

You have accepted this assignment, resulting in a repo all for yourself. Work and commit on this repo itself. Do not create new repos or branches.

Data-transformations are vital in analytics - a common reason for failure of AI/ML projects is data-misunderstanding. This usually reflects as wrong assumptions about the data, sensor-behavior and accuracy.

## About this repo

The assignment centers around a function that computes the average of a bunch of readings ('numbers') from an IoT sensor. Think of a sensor like a battery-temperature-sensor.

The code to compute the average is simple. It's already present in this repo. See [average.js](average.js)

There are also unit tests in the `test` folder. They are implemented with [chai and mocha](https://www.youtube.com/watch?v=MLTRHc5dk6s).

The code is checked and unit-tested using the script in `checkmycode.sh`, executed with [GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI). The actions execute each time you push the code. See the `.github/workflows` folder to know what actions are run.

As you can see in the Actions tab, a test is failing.

Your task is to make it pass. Adapt the code to pass the test and commit your changes in this repo.

Read the tests to know what is expected of the system in the 'happy' scenario as well as 'error' scenarios (when the sensor failed to sense).
Such tests make data-assumptions explicit and smoothen the flow of downstream MLops. You are welcome to add more tests to flesh out more assumptions.

Enjoy :)
