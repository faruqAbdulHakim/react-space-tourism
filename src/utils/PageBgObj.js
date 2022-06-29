const PageBgsObj = (bgMobile, bgTablet, bgDesktop) => {
  return {
    '--bg-mobile': `url(${bgMobile})`,
    '--bg-tablet': `url(${bgTablet})`,
    '--bg-desktop': `url(${bgDesktop}`,
  };
};

export default PageBgsObj;
