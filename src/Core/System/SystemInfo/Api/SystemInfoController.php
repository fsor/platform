<?php declare(strict_types=1);

namespace Shopware\Core\System\SystemInfo\Api;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\System\SystemInfo\RequirementsPath;
use Shopware\Core\System\SystemInfo\RequirementsPathResult;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"api"})
 */
class SystemInfoController extends AbstractController
{
    /**
     * @var string
     */
    private $shopwarePath;

    public function __construct(string $shopwarePath)
    {
        $this->shopwarePath = $shopwarePath;
    }

    /**
     * @Route("/api/v{version}/_action/system-info", name="api.action.system_info.getSystemInfo", methods={"GET"})
     */
    public function getSystemInfo(): Response
    {
        $requirementsFile = $this->shopwarePath . '/platform/src/Recovery/Common/requirements.php';

        /** @var RequirementsPathResult $pathRequirements */
        $pathRequirements = (new RequirementsPath($this->shopwarePath, $requirementsFile))->check();

        return new JsonResponse(
            ['path' => $pathRequirements->toArray()]
        );
    }
}
