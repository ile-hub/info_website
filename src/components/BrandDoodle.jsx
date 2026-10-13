const drawings = {
  home: <><path d="M46 81V44L35 52L76 18L118 50L107 43V83M67 83V61Q76 51 86 61V83" /><path d="M111 30C96 11 111 0 121 14C132-3 149 13 135 27L122 40Z" fill="#FFD055" /><path d="M12 78Q33 70 49 82T112 84T156 75M18 37L8 31M29 23L24 11M143 52L154 45" /></>,
  renters: <><path d="M41 79V45L30 51L66 20L101 49L92 44V79M57 79V61Q65 52 75 61V79" /><path d="M98 66C116 61 139 44 136 27C132 10 114 19 115 32C113 12 92 17 97 32C103 48 127 63 137 79" /><path d="M12 42L22 46M23 22L30 32M143 12L137 20" /><path d="M46 84Q68 89 92 85" stroke="#FFD055" strokeWidth="5" /></>,
  landlords: <><path d="M49 80V41L38 48L78 13L119 46L108 40V80M69 79V59Q78 50 88 59V80" /><path d="M20 53A14 14 0 1 1 34 39L48 53L42 59L36 54L31 59L21 49" /><path d="M59 45H67V53H59ZM88 45H96V53H88Z" fill="#FFD055" /><path d="M128 22L139 12M135 38L151 33M126 55L140 60M35 85Q75 91 116 83" /></>,
  how: <><path d="M12 73C35 92 51 60 45 43C39 23 69 13 78 33C86 54 96 83 117 65C129 55 122 35 145 23M132 22L147 21L146 37" /><circle cx="20" cy="74" r="7" fill="#FFD055" /><circle cx="77" cy="32" r="7" fill="#FFD055" /><path d="M108 22L102 13M120 16L122 5M138 71L150 77" /></>,
  waitlist: <><path d="M31 76L26 29L112 23L118 74ZM27 30L73 57L111 24M31 75L59 48M117 73L88 47" /><path d="M117 16C105 2 118-4 126 5C133-7 147 3 138 13L127 25Z" fill="#FFD055" /><path d="M11 47L2 44M19 20L11 11M133 48L149 41M131 65L145 71" /></>,
};

export default function BrandDoodle({ variant = "home" }) {
  return <svg viewBox="0 0 160 100" className="brand-doodle" fill="none" stroke="#043D27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawings[variant] || drawings.home}</svg>;
}
