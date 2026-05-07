import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

export function HolidayClosureDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if current date is within holiday period (May 4 - May 15)
    const today = new Date();
    const month = today.getMonth(); // 0-indexed
    const day = today.getDate();

    const isHolidayPeriod = month === 4 && day >= 4 && day <= 15; // May is month 4

    setIsOpen(isHolidayPeriod);
  }, []);

  // Prevent dialog from closing when clicking outside or on cancel
  if (!isOpen) return null;

  return (
    <AlertDialog open={isOpen} onOpenChange={() => {}}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-amber-700">
            Holiday Break
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base mt-2">
            We're currently closed for our holiday break from May 4-15, 2026. 
            We'll reopen on May 16 with renewed energy. 
            <br />
            <br />
            Thank you for your patience!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm text-amber-800 my-4">
          <strong>Reopening:</strong> May 16, 2026
        </div>
        <div className="flex gap-2">
          <AlertDialogAction 
            onClick={() => setIsOpen(false)}
            className="flex-1"
          >
            Got It
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
