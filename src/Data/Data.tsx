import books_img from '../img/Group 1603.png';
import books_img2 from '../img/Group 1608.png';
import books_img3 from '../img/Group 1618.png';

interface IBooks {
  id: number;
  title: string;
  authors: string;
  price: string;
  img: string;
  publisher: string;
  language: string;
  format: string;
  discription: string;
}

const books: IBooks[] = [
  {
    id: 1,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $33',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 2,
    title: 'Robot Operating System (ROS) for Absolute Beginners',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $32',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 3,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $34',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 4,
    title: 'Robot Operating System (ROS) for Absolute Beginners',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $35',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 5,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $36',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 6,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $37',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 7,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $38',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 8,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $39',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 9,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $40',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 10,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $41',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 11,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny',
    price: ' $42',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 12,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $43',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 13,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $44',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 14,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $45',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 15,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $46',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 16,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $47',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 17,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $48',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 18,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $49',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 19,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $50',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 20,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $51',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 21,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $52',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 22,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $53',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 23,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $54',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 24,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $55',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 25,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $56',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 26,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $57',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 27,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $58',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 28,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $59',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 29,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $60',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 30,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $61',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 31,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $62',
    img: books_img,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 32,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $63',
    img: books_img2,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 33,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $64',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 34,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $65',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 35,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $66',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
  {
    id: 36,
    title: 'Robot Operating System (ROS) for Absolute Beginners, 2nd Edition',
    authors: 'Lentin Joseph, Aleena Johny ',
    price: ' $67',
    img: books_img3,
    publisher: 'Apress 2018',
    language: 'English',
    format: 'Paper book / ebook (PDF)',
    discription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur tempus diam ac tristique. Phasellus porta nunc eu auctor luctus. Sed ac magna nibh. In convallis dictum tristique. Aenean hendrerit massa sed leo eleifend porta. Fusce eget erat pellentesque, viverra ipsum at, tincidunt nibh. Nulla nec varius ipsum. Phasellus porta sagittis libero nec placerat. Maecenas non erat urna. Ut ut erat ex. Sed pellentesque pulvinar purus et cursus.    Praesent blandit est eu orci laoreet convallis. Ut sed justo magna. Nunc sagittis eros id metus pharetra imperdiet. Integer feugiat ac lacus non ullamcorper. Phasellus feugiat eleifend orci maximus scelerisque. Duis bibendum imperdiet quam eget venenatis. Donec vestibulum quam vitae gravida suscipit. Curabitur efficitur tellus felis, et ultricies erat efficitur id. Sed pharetra leo nec mollis bibendum. Vestibulum eget sem at justo semper vulputate. Cras sodales hendrerit nulla, et feugiat velit viverra et. Maecenas eget facilisis elit. Fusce non quam ac sem eleifend fringilla. Sed id sollicitudin mauris.',
  },
];

export default books;
