import ProjectWrap from '@/app/projects/[id]/page';
import Modal from '@/domains/common/components/Modal';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Modal>
      <ProjectWrap params={params} />
    </Modal>
  );
}
