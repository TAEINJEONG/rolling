export const baseStyles = 'box-border text-center cursor-pointer';

export const variants = {
  primary:
    'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 focus:bg-purple-800 focus:outline-2 focus:outline-purple-900 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
  secondary:
    'outline outline-1 outline-purple-600 text-purple-700 hover:bg-purple-100 hover:text-purple-600 active:bg-purple-100 active:text-purple-600 focus:text-[#9747FF] focus:outline-1 focus:outline-purple-800 focus:bg-white disabled:outline-none disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
  outlined:
    'outline outline-1 outline-gray-300 text-gray-900 hover:bg-gray-100 active:bg-gray-100 focus:bg-white focus:outline-1 focus:outline-gray-500 disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed',
  icon: 'h-[36px] px-1.5 rounded-md outline-1 outline-gray-300 bg-white hover:bg-gray-100 active:bg-gray-100 focus:bg-white focus:outline-1 focus:outline-gray-500',
};

export const sizes = {
  xs: 'h-[28px] px-6 rounded-md text-14-regular leading-5 tracking-[-0.005em]',
  sm: 'h-[36px] px-6 rounded-md text-16-regular leading-6 tracking-[-0.01em]',
  md: 'h-[40px] px-6 rounded-md text-16-regular leading-6.5 tracking-[-0.01em]',
  lg: 'h-[56px] px-20 rounded-xl text-18-bold leading-7 tracking-[-0.01em]',
  xl: 'h-[56px] px-10 rounded-xl text-18-bold leading-7 tracking-[-0.01em]',
};
