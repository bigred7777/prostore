import { cn } from "@/lib/utils";
import { Decimal } from "@prisma/client/runtime/client";

const ProductPrice = ({
  price,
  className,
}: {
  price: Decimal;
  className?: string;
}) => {
  const stringPrice = price.toFixed(2);
  const [intValue, floatValue] = stringPrice.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
