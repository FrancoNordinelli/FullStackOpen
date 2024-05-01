# Exercises from 2.1 to 2.5
https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5

2.1: Course information step6
Let's finish the code for rendering course contents from exercises 1.1 - 1.5
Define a component responsible for formatting a single course called Course.
The component structure of the application can be, for example, the following:
App
  Course
    Header
    Content
      Part
      Part
      ...
Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.
The rendered page can, for example, look as follows:

You don't need the sum of the exercises yet.

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.