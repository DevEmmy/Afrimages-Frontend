import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';

const Footer = () => {
  const footerContent = [
    {
      title: 'Content',
      sub: [
        {
          title: 'New Asset',
          link: '/',
        },
        {
          title: 'Search Trends',
          link: '/',
        },
        {
          title: 'Popular Content',
          link: '/',
        },
        {
          title: 'Blogs',
          link: '/',
        },
      ],
    },
    {
      title: 'Information',
      sub: [
        {
          title: 'About Us',
          link: '/',
        },
        {
          title: 'Become a Contributor',
          link: '/',
        },
        {
          title: 'Sell your Content',
          link: '/',
        },
      ],
    },
    {
      title: 'Legal',
      sub: [
        {
          title: 'Terms and Condition',
          link: '/',
        },
        {
          title: 'License agreement',
          link: '/',
        },
        {
          title: 'Copyright Information',
          link: '/',
        },
        {
          title: 'Privacy Policy',
          link: '/',
        },
      ],
    },
  ];
  return (
    <div className='bg-green1100 py-10 px-xPadding '>
      <div className='grid-4 text-white'>
        {footerContent.map((item, i) => {
          return (
            <div key={item.title}>
              <h2 className='text-[1.5em] font-bold border-b-4 mb-4 border-solid  border-orange800 inline'>
                {item.title}
              </h2>

              <div className='py-2'>
                {item.sub.map((sub, j) => {
                  return (
                    <a key={sub.title} href={sub.link} className='block'>
                      {sub.title}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div>
          <h2 className='text-[1.5em] font-bold border-b-4 mb-4 border-solid  border-orange800 inline'>
            Social Media
          </h2>
          <div className='py-2'>
            <div className='flex'>
              <RiFacebookLine size={35} />
              <RiTwitterLine size={35} />
              <RiInstagramLine size={35} />
            </div>

            <p className='text-white'>Get exclusive updates just for you</p>

            <div className='bg-orange800 text-white py-3 px-6 text-[0.8em] rounded-md w-fit'>
              Sign Up
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[1px] bg-white my-5'></div>

      <p className='text-white'>Afrimages - 2023</p>
    </div>
  );
};

export default Footer;
