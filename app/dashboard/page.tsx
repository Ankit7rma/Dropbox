import { db } from "@/Firebase";
import DropZone from "@/components/DropZone";
import TableWrapper from "@/components/table/TableWrapper";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

async function Dashboard() {
  const { userId } = auth();
  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data()?.timeStamp?.seconds * 1000) || null,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadUrl,
    type: doc.data().type,
    size: doc.data().size,
  }));

  console.log(skeletonFiles);
  return (
    <div className="border-t ">
      <DropZone />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
