import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
	return (
		<motion.div
			className='bg-gray-200 bg-opacity-50 backdrop-blur-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all rounded-2xl border border-gray-700'
			whileHover={{ y: -5 }}
		>
			<div className='p-6'>
				<span className='flex items-center text-sm font-medium text-black'>
					<Icon size={22} className='mr-2' style={{ color }} />
					{name}
				</span>
				<p className='mt-2 text-4xl font-bold text-black'>{value}</p>
			</div>
		</motion.div>
	);
};

export default StatCard;
