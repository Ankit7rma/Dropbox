import { db } from "@/Firebase";
import DropZone from "@/components/DropZone";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

async function Dashboard() {
  const { userId } = auth();
  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000),
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadUrl,
    type: doc.data().type,
    size: doc.data().size,
  }));

  console.log(skeletonFiles);
  return (
    <div className="text-red-300 dark:text-blue-800 flex flex-col justify-center items-center">
      <DropZone />
    </div>
  );
}

export default Dashboard;
