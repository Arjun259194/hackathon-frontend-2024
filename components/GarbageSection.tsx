import { FocusCards } from "./focusCard";

const garbageImages = [
  {
    src: "https://images.unsplash.com/photo-1621408422423-4392b2711f69?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reduce Waste",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1663951252608-ab1fdec72fbe?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Saving environment",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1681483793843-b852c234243d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Recycle Responsibly",
  },
  {
    src: "https://images.unsplash.com/photo-1631174721289-6656e7f3353c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Join Cleanup Drives",
  },
  {
    src: "https://images.unsplash.com/photo-1721622248593-c24c83b830c7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Avoid Littering",
  },
  {
    src: "https://images.unsplash.com/photo-1520571209517-971582130d30?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reduce Plastic Usage",
  },
];

export const GarbageGridSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl capitalize font-bold text-center text-gray-800 mb-8">
          One idea, many missions
        </h2>
        <FocusCards cards={garbageImages} />
      </div>
    </section>
  );
};
