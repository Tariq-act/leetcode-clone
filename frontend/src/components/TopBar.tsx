const TopBar = () => {
  return (
    <div>
      <div className='max-w-screen-lg bg-black min-h-32 items-center m-auto px-5 pb-5 pt-8'>
        <h1 className='text-white text-8xl'>Daily Code</h1>
        <NavBar />
      </div>
    </div>
  );
};

const topbarItems = [
  { title: 'About', route: '/about' },
  { title: 'Activity', route: '/activity' },
  { title: 'Problems', route: '/problems' },
  { title: 'Leaderboard', route: '/leaderboard' },
];

function NavBar() {
  return (
    <div className='flex gap-8 mt-4'>
      {topbarItems.map((item) => (
        <NavBarItem route={item.route} title={item.title} />
      ))}
    </div>
  );
}

function NavBarItem({ title, route }: { title: string; route: string }) {
  return (
    <div className=' text-slate-500 cursor-pointer hover:text-white text-base'>
      {title}
    </div>
  );
}

export default TopBar;
